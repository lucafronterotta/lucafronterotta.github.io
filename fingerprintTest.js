<html>
<head>
</head>
<body>

<script>
    // Initialize the agent at application startup.
    const fpPromise = import('https://fpcdn.io/v3/1AoRWAgL0WCVZkxkH3e3')
      .then(FingerprintJS => FingerprintJS.load({
        region: "eu"
      }))

    // Get the visitor identifier when you need it.
    fpPromise
      .then(fp => fp.get())
      .then(result => {
        // This is the visitor identifier:
        const visitorId = result.visitorId
        console.log(visitorId)
      })
  </script>



</body>
</html>