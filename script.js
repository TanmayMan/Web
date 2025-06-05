window.addEventListener('load', function () {
  Fingerprint2.get(components => {
    const values = components.map(c => c.value);
    const fingerprint = Fingerprint2.x64hash128(values.join(''), 31);

    const data = {
      fingerprint,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: {
        width: screen.width,
        height: screen.height
      },
      referrer: document.referrer
    };

    console.log('Visitor Info:', data);

    // For demo purposes only: You would POST this to your backend
    // fetch('https://your-server.com/log', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(data)
    // });
  });
});
