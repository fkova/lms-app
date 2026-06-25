#!/usr/bin/env bash
# Workaround for CLI bug: Studio container doesn't mount supabase/functions
# Remove this script once supabase CLI fixes the bind mount for EDGE_FUNCTIONS_MANAGEMENT_FOLDER

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PROJECT_ID="lms-app"

mkdir -p "$PROJECT_DIR/supabase/functions"

supabase start

# Get Studio image and config from the running container
STUDIO_IMAGE=$(docker inspect "supabase_studio_${PROJECT_ID}" --format '{{.Config.Image}}')
STUDIO_ENVS=$(docker inspect "supabase_studio_${PROJECT_ID}" --format '{{range .Config.Env}}-e "{{.}}" {{end}}')
STUDIO_NETWORK="supabase_network_${PROJECT_ID}"

# Recreate Studio with the functions directory properly mounted
docker stop "supabase_studio_${PROJECT_ID}"
docker rm "supabase_studio_${PROJECT_ID}"

eval docker run -d \
  --name "supabase_studio_${PROJECT_ID}" \
  --network "$STUDIO_NETWORK" \
  -p 54323:3000 \
  -v "$PROJECT_DIR/supabase/snippets:$PROJECT_DIR/supabase/snippets:rw" \
  -v "$PROJECT_DIR/supabase/functions:$PROJECT_DIR/supabase/functions:rw" \
  $STUDIO_ENVS \
  "$STUDIO_IMAGE"

echo "Studio started with functions directory mounted. Open http://127.0.0.1:54323"
