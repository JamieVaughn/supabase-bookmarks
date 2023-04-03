

function StatusMessage ({ status }) {
  const isSuccess = String(status).startsWith('2')
  const msg = {
    css: isSuccess ? 'success' : 'error',
    message: isSuccess 
    ? 'Post created successfully!' 
    : 'An error occurred while creating the post. ' + status.message
  }
  
  return (
    <article>
      <aside className={msg.css}>{msg.message}</aside>
    </article>
  )
}

export default StatusMessage