

function StatusMessage ({ status, message }) {
  const isSuccess = String(status.status).startsWith('2')
  const msg = {
    css: isSuccess ? 'success' : 'error',
    message: isSuccess 
    ? 'Success! ' + status?.message
    : 'An error occurred. ' + status?.message
  }
  
  return (
    <article>
      <aside className={msg.css}>{msg.message}</aside>
    </article>
  )
}

export default StatusMessage