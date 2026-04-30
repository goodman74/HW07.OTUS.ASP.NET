import './App.css'

function App() {
  const fetchRoles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/roles');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Roles:', data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  }
  return (
    <>
      <div className="center">
        <div>
          <h1>HW 07</h1>
          <p>
            Click on the button below to test <code>API request</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={fetchRoles}
        >
          Get Roles
        </button>
      </div>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
