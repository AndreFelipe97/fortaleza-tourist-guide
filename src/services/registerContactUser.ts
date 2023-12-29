'use server';

import axios from "axios";

export async function registerContactUser(oldState: any, formData: any) {
  try {
    const response = await axios.post(`${process.env.NODE_ENV === "development" ? 'http://localhost:3000': 'https://fortaleza-tourist-guide.vercel.app'}/api/contacts`, {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    })
    return response.data;
  } catch (error) {
    return 'Error ao registrar contato do usuário.'
  }
}