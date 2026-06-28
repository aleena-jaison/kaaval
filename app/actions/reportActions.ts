'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createPublicReport(formData: FormData) {
  const supabase = await createClient()

  const data = {
    report_type: formData.get('reportType') as string,
    location: formData.get('location') as string,
    ward: formData.get('ward') as string,
    description: formData.get('description') as string,
    reporter_name: formData.get('reporterName') as string,
    reporter_phone: formData.get('reporterPhone') as string,
    status: 'Pending'
  }

  const { error } = await supabase
    .from('public_reports')
    .insert([data])

  if (error) {
    console.error('Error inserting public report:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin')
  redirect('/report?success=true')
}

export async function getPublicReports() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('public_reports')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching public reports:', error)
    return []
  }

  return data || []
}

export async function getPendingReportsCount() {
  const supabase = await createClient()
  const { count, error } = await supabase
    .from('public_reports')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'Pending')

  if (error) {
    console.error('Error fetching pending reports count:', error)
    return 0
  }

  return count || 0
}

export async function updateReportStatus(id: string, status: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('public_reports')
    .update({ status })
    .eq('id', id)

  if (error) {
    console.error('Error updating report status:', error)
    return { success: false, error: error.message }
  }

  revalidatePath('/admin/reports')
  revalidatePath('/admin')
  return { success: true }
}
