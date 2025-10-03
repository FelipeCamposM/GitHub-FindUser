import React from 'react'

const Header = () => {

    function reloadPage() {
        window.location.reload();
    }

  return (
    <div className="bg-slate-900 py-6 px-6 text-white cursor-pointer" onClick={reloadPage}>
        <h1 className="text-xl font-bold">GitHub User Finder</h1>
    </div>
  )
}

export default Header
