'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createLicensedPet(formData: FormData) {
  const supabase = await createClient()

  const data = {
    tag_id: formData.get('tagId') as string,
    passport_id: formData.get('passportId') as string,
    name: formData.get('name') as string,
    breed: formData.get('breed') as string,
    owner_name: formData.get('ownerName') as string,
    owner_phone: formData.get('ownerPhone') as string,
    ward: formData.get('ward') as string,
    vaccination_status: formData.get('vaccinationStatus') as string
  }

  const { error } = await supabase
    .from('licensed_pets')
    .insert([data])

  if (error) {
    console.error('Error inserting licensed pet:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/licensed')
  revalidatePath('/')
  return { success: true }
}

export async function getLicensedPets() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('licensed_pets')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching licensed pets:', error)
    return []
  }

  return data || []
}
