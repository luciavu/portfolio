import './About.scss';
const About = () => {
  return (
    <section id="about" className="About">
      <div className="heading">
        <h1 className="id">01</h1>
        <h1 className="name">About</h1>
      </div>

      <div className="about-wrapper">
        <div className="about-text">
          <h2>{atob('TmljZSB0byBtZWV0IHlvdSwgSSdtIEx1Y2lhIQ==')}</h2>

          <p>
            <strong>About me: </strong>
            {atob('SSdtIGFuIHVuZGVyZ3JhZHVhdGUgc3R1ZGVudCBhdA==')}
            <b> {atob('VGhlIFVuaXZlcnNpdHkgb2YgUXVlZW5zbGFuZA==')} </b>
            {atob('d29ya2luZyB0b3dhcmRzIG15')}
            <b>
              {' '}
              {atob(
                'QmFjaGVsb3JzIGluIFNjaWVuY2UgKENvbXAuIFNjaSBNYWpvcikgKyBEYXRhIFNjaWVuY2UgYW5kIFN0YXRpc3RpY3MgTWlub3Jz',
              )}
            </b>
            {atob(
              'LiBBbG9uZ3NpZGUgbXkgc3R1ZGllcywgSSd2ZSBiZWVuIGFjdGl2ZWx5IGludm9sdmVkIGluIHRoZQ==',
            )}
            <b>
              <a
                style={{
                  margin: '0 0.5rem',
                  color: 'var(--color-point-dark)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.2rem',
                }}
                href="https://www.theodinproject.com/about"
                target="_blank"
              >
                {atob('T2RpbiBQcm9qZWN0')}
              </a>
            </b>
            {atob('YW5kIGhhdmUgYmVlbiBjb2Rpbmcgd2ViIGFwcGxpY2F0aW9ucyBmb3Ig')}{' '}
            <b>{atob('MisgeWVhcnM=')}</b>.
          </p>

          <p>
            <strong>My plans:</strong>
            {atob(
              'dG8gaW1wcm92ZSBteSBjb2RpbmcvbWF0aC9kYXRhIHNjaWVuY2Ugc2tpbGxzIGFuZCB3b3JrIG9uIHByb2plY3RzIHRoYXQgSSBmaW5kIGZ1biBhbmQgaW50ZXJlc3Rpbmcu',
            )}
          </p>

          <p>
            <strong>I'm currently working on:</strong>{' '}
            {atob(
              'YSBDaHJvbWUgZXh0ZW5zaW9uIGNhbGxlZCBEYXNoU3RhcnQsIGFuZCBhIHBlcnNvbmFsIHdlYiBhcmNoaXZlIHRvIHN0b3JlIGFsbCB0aGUgcGhvdG9zIEkndmUgdGFrZW4gd2l0aCBteSB0ZWxlc2NvcGUgKGJlZm9yZSBteSBwaG9uZSBzdG9yYWdlIGRpZXMp',
            )}
          </p>
          <p>
            <strong>My interests: </strong>{' '}
            {atob('Y29kaW5nLCBtYXRocywgZHJhd2luZywgbXkgdGVsZXNjb3Bl')}
          </p>
        </div>

        <div className="about-images">
          <figure>
            <img src="/images/about/wip.jpg" alt="WIP Project" />
            <figcaption>
              <strong>Current Project - </strong>Dashboard Chrome extension
            </figcaption>
          </figure>
          <figure>
            <img src="/images/about/telescope.jpeg" alt="Photo from telescope 1" />
            <figcaption>
              <strong>Random telescope photo - </strong>The Moon (150x)
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
