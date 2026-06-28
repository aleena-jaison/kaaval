'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createIntakeRecord(formData: FormData) {
  const supabase = await createClient()

  const data = {
    type: formData.get('type') as string,
    category: formData.get('category') as string,
    health_status: formData.get('health') as string,
    ward: formData.get('ward') as string,
    weight_kg: formData.get('weight') ? parseFloat(formData.get('weight') as string) : null,
    notes: formData.get('notes') as string,
    status: 'In Shelter'
  }

  const { error } = await supabase
    .from('intake_records')
    .insert([data])

  if (error) {
    console.error('Error inserting intake record:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin')
  revalidatePath('/')
  redirect('/admin')
}

export async function getIntakeRecords() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('intake_records')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching intake records:', error)
    return []
  }

  return data || []
}

export async function getShelterCapacityByCategory() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('intake_records')
    .select('category')
    .eq('status', 'In Shelter')

  if (error) {
    console.error('Error fetching capacity:', error)
    return []
  }

  const counts: Record<string, number> = {
    Baby: 0,
    Female: 0,
    Old: 0,
    Disabled: 0,
    Others: 0
  }

  data?.forEach(record => {
    if (counts[record.category] !== undefined) {
      counts[record.category] += 1
    }
  })

  return [
    { name: "Baby", count: counts.Baby, max: 20 },
    { name: "Female", count: counts.Female, max: 20 },
    { name: "Old", count: counts.Old, max: 15 },
    { name: "Disabled", count: counts.Disabled, max: 10 },
    { name: "Others", count: counts.Others, max: 20 },
  ]
}
