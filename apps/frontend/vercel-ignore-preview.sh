#/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" != "main" && "$VERCEL_GIT_COMMIT_BRANCH" != "develop" ]] ; then
    echo "Skipping build for branch $VERCEL_GIT_BRANCH"
    exit 0;
else
    echo "Build can proceed"
    exit 1;
fi