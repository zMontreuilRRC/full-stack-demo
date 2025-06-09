# Script for preventing Vercel from deploying outside of "main" and "develop" branches
if ["$VERCEL_GIT_BRANCH" != "main" ] && ["$VERCEL_GIT_BRANCH" != "develop"]; then
    echo "Skipping build for branch $VERCEL_GIT_BRANCH"
    exit 0
else
    exit 1
fi