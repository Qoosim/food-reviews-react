import './index.css';
import Review from './Review';

function App() {
  return (
    <main>
      <section>
        <div className="flex flex-col place-items-center font-bold text-4xl capitalize my-9">
          <h2>meal reviews</h2>
          <div className="w-24 border-2 border-blue-400 rounded"></div>
        </div>
        <div className="container mx-auto flex place-content-center">
          <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
