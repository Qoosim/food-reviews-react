import './index.css';
import Review from './Review';

function App() {
  return (
    <main>
      <section>
        <div className="flex place-content-center">
          <h2>meal reviews</h2>
          <div></div>
        </div>
        <div className="container mx-auto flex place-content-center">
          <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
