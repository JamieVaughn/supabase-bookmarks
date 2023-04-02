
export async function dbCallback (event, callback, loading) {
  event?.preventDefault()
  try {
    loading(true)
    const { error } = await callback()
    if(error) throw error
  } catch (error) {
    console.log(error)
  } finally {
    loading(false)
  }
}