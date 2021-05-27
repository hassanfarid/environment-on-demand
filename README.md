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
   * System limit for running resources
   * White/Black list for user access to container images
* Admin panel for user management
   * Add/ remove users
* Allow user login via LDAP / KeyCloak

## Implementation Approach

### Backend - Python (Flask)
- Open specification API
- No authentication (will be covered by gateway later on)
- provision for users
- provision for workspace
- Environment Images
   - CRUD
   - status check on server
- Runs (container launch)
   - CRUD
   - status check on active runs
   - History of old runs

### Backend Store - MongoDB
- Collections
   - environment
   - runs

### Scheduler
- Using [Ofelia](https://github.com/mcuadros/ofelia)
- schedule call to backend
   - check status for existing runs
   - check status for available images
- schedule least-recently-used images by retention policy
   - do we really need this?
   - using [Docuum](https://github.com/stepchowfun/docuum)
