import RegForm from "./components/RegForm"

function App() {
 

  return (
   <div className="main">
    <div style={{color: 'white'}} className="paragraphs">
      <p  className="p1">Learn to code by watching others</p>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
    </div>
    <div className="freeTrial"><p className="p2">Try it free 7 days then $20/mo. thereafter</p></div>
    <div className="login">
      <RegForm />
 
    </div>

   </div>
  )
}

export default App
