# exposelService

## components

- `exposeService`
    - Kubernetes custom resource
- `VPNclient`
    - Container to deploy to Kubernetes as Pod
- `VPNserver`
    - Container to deploy to backend-server which I own
- `proxyManager`
    - manager for `VPNserver`
- `externalServiceDashboard`
    - dashboard for client
    - deployed separately from controller
- `VPNmanager`
    - manage VPN
    - web-dashboard

