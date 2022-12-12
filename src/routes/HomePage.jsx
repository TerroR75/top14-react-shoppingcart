export default function () {
  function test() {
    const aboutUs = document.querySelector('.hp-about-us');
    console.log(aboutUs);
  }

  return (
    <div className='home-page'>
      <div className='hp-about-us'></div>
    </div>
  );
}
