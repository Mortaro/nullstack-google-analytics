
# Nullstack Google Pixel

Nullstack wrapper for [Google Analytics](https://analytics.google.com)

## Install

```bash
npm install --save nullstack-google-analytics
```

## Usage

All you have to do is import and render the Google Analytics tag with your project ID as an attribute

This component will listen for Nullstack route changes and track a PageView

```jsx
import Nullstack from 'nullstack';
import GoogleAnalytics from 'nullstack-google-analytics';

class Application extends Nullstack {

  render() {
    return (
      <main>
        {/* your routes go here */}
        <GoogleAnalytics id="REPLACE_WITH_YOUR_GOOGLE_ANALYTICS_ID" />
      </main>
    )
  }

}

export default Application;
```

## License

Nullstack Google Analytics is released under the [MIT License](https://opensource.org/licenses/MIT).