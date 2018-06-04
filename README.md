# environment-on-demand
Environment On Demand, using docker containerization. Small self-service web application to setup containers on demand by non-technical users.

## Features

### Basic
* User authentication
* List of available images
* Select and launch image name
* Stop / Remove container for loggedin user
* Monitor stack for "environment-on-demand"
* Deploy CI / CD strategy

### Advanced
* Admin panel for configurations
   * Add / remove container images available
   * Default environment settings for container images
      * Volumes / Network / CPU / RAM
   * White/Black list for user access to container images
* Admin panel for user management
   * Add/ remove users
* Allow user login via LDAP
