
export async function dbCallback (event, callback, loading) {
  event?.preventDefault()
  try {
    loading(true)
    const { data, error } = await callback()
    loading(false)
    console.log(data, error)
    return { data, error }
  } catch (error) {
    loading(false)
    console.error(error)
  } finally {
    loading(false)
  }
}