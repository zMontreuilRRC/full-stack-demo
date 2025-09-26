# Script for preventing Vercel from deploying outside of "main" and "develop" branches
if [["$VERCEL_GIT_COMMIT_REF" != "main" && "$VERCEL_GIT_COMMIT_BRANCH" != "develop"]] ; then
    echo "Skipping build for branch $VERCEL_GIT_BRANCH"
    exit 0;
else
    echo "Build can proceed"
    exit 1;
fi