import MySuspense from './MySuspense'
import ArtistApp from './ArtistApp/ArtistApp'
const SuspenseView = () => {
  return (
    <>
      <h3>Suspense</h3>
      <MySuspense />
      <ArtistApp />
    </>
  );
};

export default SuspenseView