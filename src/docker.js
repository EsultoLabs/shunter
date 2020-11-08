    /*
     *      Check docker socket
     */
    var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
    if (!fs.existsSync(socket)) {
        throw new Error('Are you sure the docker is running?');
    }

    var stats  = fs.statSync(socket);
    if (!stats.isSocket()) {
        throw new Error('Are you sure the docker is running?');
    }

    var docker = new Docker({ socketPath: socket });
    docker.listServices((err, list) => {
        if (err)
            throw new Error(err);

        for (service in list) {
            console.log(service.id);
        }
    });
