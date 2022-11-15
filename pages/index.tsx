import pages from '../assets/pages.json';

const Home = () => (
  <>
    <h1>Index of https://epoch.tw/</h1>
    <ul>
      {
        pages.map((page) => (
          <li key={page.link}>
            <a href={page.link} target="_blank" rel="noreferrer">
              { page.label }
            </a>
          </li>
        ))
      }
    </ul>
  </>
);

export default Home;
