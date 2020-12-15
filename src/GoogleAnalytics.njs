import Nullstack from 'nullstack';

class GoogleAnalytics extends Nullstack {

  hydrate({router, page, id}) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', id, {
      page_title: page.title,
      page_path: router.url
    });
    window.addEventListener('nullstack.page.title', () => {
      gtag('event', 'page_view', {
        page_title: page.title,
        page_path: router.url
      })
    })
  }
  
  render({id, self}) {
    const domain = 'https://www.googletagmanager.com';
    if(self.hydrated) {
      return <script async src={`${domain}/gtag/js?id=${id}`} />
    }
    return (
      <head>
        <link rel="preconnect" href={domain} />
      </head>
    )
  }

}

export default GoogleAnalytics;