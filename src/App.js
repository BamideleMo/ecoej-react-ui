import './App.css';

function App() {
  return (
    <div className="text-center mt-32 text-lg w-11/12 lg:w-1/2 rounded-lg shadow bg-blue-100 p-6 lg:p-20 mx-auto">
      <img src="/ECOEJ-logo.png" alt="ECWA College of Education, Jos" className="mx-auto w-24" />
      <h1 className="text-3xl text-blue-900 mt-4">Welcome.</h1>
      <p><b>This website is under development</b>. You may 
        access the Portal for semester registration: 
         <a href="https://portal.ecoej.org" className='text-red-600 hover:opacity-30'> portal.ecoej.org</a></p>
    </div>
  );
}

export default App;
