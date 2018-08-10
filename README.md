
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

First, initialize Zappa packaging in the api directory.

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

Next deploy the API portion of your application.

```
$ zappa deploy dev

Calling deploy for stage dev..
Downloading and installing dependencies..
 - sqlite==python36: Using precompiled lambda package
Packaging project as zip.
Uploading api-dev-1533858490.zip (5.7MiB)..
100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 6.00M/6.00M [00:02<00:00, 2.07MB/s]
Scheduling..
Scheduled api-dev-zappa-keep-warm-handler.keep_warm_callback with expression rate(4 minutes)!
Uploading api-dev-template-1533858497.json (1.5KiB)..
100%|██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 1.58K/1.58K [00:00<00:00, 4.47KB/s]
Waiting for stack api-dev to create (this can take a bit)..
100%|████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████| 4/4 [00:09<00:00,  2.71s/res]
Deploying API Gateway..
Deployment complete!: https://ner2byutgl.execute-api.us-east-1.amazonaws.com/dev

```

Take that URL and plug it into the `web/src/App.js` as the URL_BASE variable.


After you have made this change, it is time to deploy your React app to S3.

Build and deploy the webapp.  Make sure you change BUCKET_NAME in bin/deploy to match your environment.

```
$ cd ./web
$ bin/deploy
```

Log into AWS S3 Console and configure the bucket for static hosting. [Static Hosting Reference](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)

