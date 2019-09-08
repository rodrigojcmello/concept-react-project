import firebase from 'firebase/app';
import 'firebase/firestore';
import { Dispatch } from 'react';
import { ItemAction } from './item/types';

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: ''
});

interface Item {
  title: string;
  done: boolean;
}

let db: firebase.firestore.Firestore;

export const dbItem = {
  add: (item: Item): void => {
    db.collection('poc/test/ok')
      .add(item)
      .then((): void => {
        // dispatch(item);
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

  synchronize: (setItem: Dispatch<ItemAction>): void => {
    db.collection('poc/test/ok').onSnapshot(({ docs }): void => {
      const items: Item[] = [];
      docs.forEach((doc): void => {
        items.push(doc.data() as Item);
      });
      setItem({
        type: 'SET_ITEMS',
        items
      });
    });
  }
};

export function initializeFirestore(setItem: Dispatch<ItemAction>): void {
  db = firebase.firestore();
  db.enablePersistence({ synchronizeTabs: true })
    .then((): void => {
      console.log('sync init');
      dbItem.synchronize(setItem);
    })
    .catch((): void => {});
}
