# NextJS Latest

## What is this repo?

- Uses the `latest` version of next.js always.
- No package-lock.json on purpose to avoid pinning a specific version.
- The index page shows the actual version of Next.js deployed. 
- A directory of features is located by visiting the index page. 

## Override Next.js version

To use a different version of Next.js instead of `latest`, specify the version in the environment 
variable `NEXTJS_VERSION_OVERRIDE` in Amplify Hosting. The `patch-next.sh` file take care of 
installing the desired version during the build (see amplify.yml). For example you can specify 
`canary` or `13.4.12`.

Test XLarge
Test Large 2
Test keyscan warning 3
Approot test 1
check_suite block test 3
