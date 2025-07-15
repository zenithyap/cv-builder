import './App.css'
import Header from './components/Header'
import ResumeInputs from './components/ResumeInputs'
import ResumePreview from './components/ResumePreview'

function App() {
  return (
    <>
      <Header />
      <div className='resume-container'>
        <ResumeInputs />
        <ResumePreview />
      </div>
    </>
  )
}

export default App
