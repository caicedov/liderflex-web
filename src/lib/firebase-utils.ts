import { db } from './firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  serverTimestamp 
} from 'firebase/firestore';

// Generar número de cotización
export async function generateQuotationNumber(): Promise<string> {
  const year = new Date().getFullYear().toString().slice(-2);
  const quotationsRef = collection(db, 'quotations');
  const q = query(
    quotationsRef,
    where('quotation_number', '>=', `LH${year}0000`),
    where('quotation_number', '<=', `LH${year}9999`),
    orderBy('quotation_number', 'desc'),
    limit(1)
  );

  const snapshot = await getDocs(q);
  
  if (snapshot.empty) {
    return `LH${year}0001`;
  }

  const lastNumber = snapshot.docs[0].data().quotation_number;
  const sequence = parseInt(lastNumber.slice(-4)) + 1;
  return `LH${year}${sequence.toString().padStart(4, '0')}`;
}

// Crear perfil de usuario
export async function createUserProfile(
  userId: string,
  email: string,
  data?: {
    fullName?: string;
    companyName?: string;
    phone?: string;
    rut?: string;
  }
) {
  const profileRef = doc(db, 'profiles', userId);
  const profileData = {
    id: userId,
    email,
    full_name: data?.fullName || '',
    company_name: data?.companyName || '',
    phone: data?.phone || '',
    address: '',
    city: '',
    rut: data?.rut || '',
    avatar_url: '',
    user_type: 'customer' as const,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  };

  await setDoc(profileRef, profileData);
  return profileData;
}

// Convertir Timestamp de Firebase a string ISO
export function timestampToString(timestamp: any): string {
  if (!timestamp) return new Date().toISOString();
  if (timestamp.toDate) {
    return timestamp.toDate().toISOString();
  }
  return new Date(timestamp).toISOString();
}