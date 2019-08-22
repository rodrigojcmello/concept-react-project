import firebase from 'firebase/app';
import 'firebase/firestore';
import { Dispatch } from 'react';
import { ItemAction } from './item/types';

firebase.initializeApp({
  apiKey: 'AIzaSyA9ZNoBZItUqs-OTuAbYEljxE6htOYwxao',
  authDomain: 'e-list-a8a7c.firebaseapp.com',
  projectId: 'e-list-a8a7c'
});

// export function iniciarFirebase() {
//   iniciarFirestore();
// }

interface Item {
  title: string;
  done: boolean;
}

let db: firebase.firestore.Firestore;

export const dbItem = {
  add: (item: Item): void => {
    db.collection('poc')
      .add(item)
      .then((): void => {
        // dispatch(item);
        console.log('new item has been added');
      })
      .catch();
  },

  // alternarConclusao: (id: string) => {
  //     const doc = reduxStore.getState().items.porId[id];
  //     doc.concluido = !doc.concluido;
  //     db
  //         .collection('teste')
  //         .doc(id)
  //         .update(doc)
  //         .then()
  //         .catch();
  // },

  // alterarOrdem: (filhos: string[], pai: string): void => {
  //   const itemPorId = store.getState().items.byId;
  //   const lote = db.batch();
  //   filhos.forEach((id, ordem): void => {
  //     itemPorId[id].order = ordem;
  //     lote.update(db.collection('teste').doc(id), itemPorId[id]);
  //   });
  //   store.dispatch(definirOrdem(pai, filhos));
  //   lote.commit().then();
  // },

  sync: (setItem: Dispatch<ItemAction>): void => {
    db.collection('poc').onSnapshot(({ docs }): void => {
      const items: Item[] = [];
      docs.forEach((doc): void => {
        items.push(doc.data() as Item);
      });
      setItem({
        type: 'SET_ITEMS',
        items
      });
      console.log('items has been sync');
    });
  }
};

export function initFirestore(setItem: Dispatch<ItemAction>): void {
  db = firebase.firestore();
  db.enablePersistence()
    .then((): void => {
      dbItem.sync(setItem);
    })
    .catch((): void => {
      // TODO: fazer componente de alerta
    });
}
