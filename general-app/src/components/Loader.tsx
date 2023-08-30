export function Loader() {
  return (
    <div className="lds-grid">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  )
}


function FullScreenLoader() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white z-20 grid place-items-center transition" >
        <Loader/>
    </div>
    )
}

export default FullScreenLoader;