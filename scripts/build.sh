#!/usr/bin/env bash

set -x

use_tag="iancleary/ivy-lee-frontend:$NAME"

DOCKERFILE="$NAME"

if [ "$NAME" == "latest" ] ; then
    DOCKERFILE=""
fi

docker build -t "$use_tag" .
