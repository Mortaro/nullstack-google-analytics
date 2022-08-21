import Nullstack from 'nullstack';

const domain = 'https://www.googletagmanager.com';

class GoogleAnalytics extends Nullstack {

  hydrate({ router, page, id }) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', id, {
      page_title: page.title,
      page_path: router.url
    });
    window.addEventListener(page.event, () => {
      gtag('event', 'page_view', {
        page_title: page.title,
        page_path: router.url
      })
    })
  }

  render({ id }) {
    return (
      <head>
        {
          this.hydrated
            ? <script async src={`${domain}/gtag/js?id=${id}`} />
            : <link rel="preconnect" href={domain} />
        }
      </head>
    )
  }

}

export default GoogleAnalytics;