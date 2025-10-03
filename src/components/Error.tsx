const Error = () => {
  return (
    <div className="bg-red-500/20 border-2 border-red-500/30 flex flex-col p-2 justify-center items-center rounded-md">
      <span>Usuário não encontrado!</span>
      <span className="text-sm text-red-300">Tente novamente com um outro nome.</span>
    </div>
  )
}

export default Error
