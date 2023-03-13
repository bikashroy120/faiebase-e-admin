import { collection, doc, getDocs, orderBy, query, setDoc,where } from "firebase/firestore"; 
import {db} from './firebase-config'
import uuid from 'react-uuid';

export const saveCategory = (data)=>{
    return setDoc(doc(db,"category",`${uuid()}`),{...data,id:uuid()},{
        merge:true
    })
}

export const getCategory = async ()=>{
    const items = await getDocs(
        query(collection(db,"category",))
    );
    return items.docs.map((doc)=> doc.data())
}

export const OrderCreact = async(data)=>{
    await setDoc(doc(db,"orderItem",`${Date.now()}`),data,{
        merge:true
    })
}
