
# DeerHacks CMS


[![DeerHacks Image](https://github.com/utmmcss/deerhacks/blob/c097731ac1a95f138462fbac6aa87ed0c7bfd191/public/backgrounds/collage.jpg?raw=true)](https://deerhacks.ca)

> DeerHacks Hackathon 2024 CMS

[![Website Status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fdeerhacks.ca)](https://deerhacks.ca)

## Setting up Development Environment

1. Clone the Repository
2. Within the project directory, run the command `yarn install` (If you haven't already, install yarn)
3. Run `yarn develop` and navigate to to the admin dashboard
4. Create an account. If you can't, navigate to the database in the `.tmp` folder and add yourself to the `admin_users` table
5. Go to the settings tab and create an API Key. Use this as a bearer token when making requests
6. Navigate to `http://localhost:1337/documentation` to see a list of endpoints you can interact with

*For Deploying to Production see: https://docs.strapi.io/dev-docs/deployment*

**Note**: This CMS leverages AWS S3 to save images so that they persist even after a re-deployment. Ensure the format in your `.env` file matches the `.env.example` file.

## Relevant URL'S
- [AWS S3 for saving images](https://aws.amazon.com/s3/pricing/?p=pm&c=s3&z=4)


