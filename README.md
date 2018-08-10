
## Create dev environment

First, set up the development environment for the API.  Works on mac with homebrew.

```
$ cd ./api
$ ./devenv
```

Creates virtual environment and installs all dependencies.


Next, set up the development environment for the React web app.  Works on mac with homebrew.

```
$ cd ./web
$ ./devenv
```

## Develop locally

Generally, you're working on a combination of cc-api and cc-web.  In order to get those to fast-turnaround/auto-restart, follow the following procedure.

1. Open up a terminal in the `api` directory.  Start the local server.

```
$ bin/local
```

Now you can insert debugger statements and save stuff and the server auto restarts.  Api runs on localhost:8080

2. Open a terminal in the `web` directory.  Start the local static server.

```
$ bin/local
```

At this point, yarn is serving the static website on localhost:3000.  You can make changes and get auto restart.

3. Open up the app in your browser and play around.

```
$ open http://localhost:3000
```


## Push to production

First, build the webapp.  Make sure you change BUCKET_NAME in bin/deploy to match your environment.

```
$ cd ./web
$ bin/deploy
```

Next, initialize Zappa packaging in the api directory.

Below is a sample session that works for my AWS.  Your values will be different.

```
$ cd ./api
$ source venv/bin/activate
$ zappa init

███████╗ █████╗ ██████╗ ██████╗  █████╗
╚══███╔╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗
  ███╔╝ ███████║██████╔╝██████╔╝███████║
 ███╔╝  ██╔══██║██╔═══╝ ██╔═══╝ ██╔══██║
███████╗██║  ██║██║     ██║     ██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚═╝  ╚═╝

Welcome to Zappa!

Zappa is a system for running server-less Python web applications on AWS Lambda and AWS API Gateway.
This `init` command will help you create and configure your new Zappa deployment.
Let's get started!

Your Zappa configuration can support multiple production stages, like 'dev', 'staging', and 'production'.
What do you want to call this environment (default 'dev'): 

AWS Lambda and API Gateway are only available in certain regions. Let's check to make sure you have a profile set up in one that will work.
Okay, using profile default!

Your Zappa deployments will need to be uploaded to a private S3 bucket.
If you don't have a bucket yet, we'll create one for you too.
What do you want to call your bucket? (default 'zappa-jo1jw45s7'): nuvuli-zappa-cotb2018

It looks like this is a Flask application.
What's the modular path to your app's function?
This will likely be something like 'your_module.app'.
We discovered: cotb.__init__.app
Where is your app's function? (default 'cotb.__init__.app'): cotb.app

You can optionally deploy to all available regions in order to provide fast global service.
If you are using Zappa for the first time, you probably don't want to do this!
Would you like to deploy this application globally? (default 'n') [y/n/(p)rimary]: 

Okay, here's your zappa_settings.json:

{
    "dev": {
        "app_function": "cotb.app",
        "aws_region": "us-east-1",
        "profile_name": "default",
        "project_name": "api",
        "runtime": "python3.6",
        "s3_bucket": "nuvuli-zappa-cotb2018"
    }
}

Does this look okay? (default 'y') [y/n]: y

Done! Now you can deploy your Zappa application by executing:

	$ zappa deploy dev

After that, you can update your application code with:

	$ zappa update dev

To learn more, check out our project page on GitHub here: https://github.com/Miserlou/Zappa
and stop by our Slack channel here: https://slack.zappa.io

Enjoy!,
 ~ Team Zappa!


```
