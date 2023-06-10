<details>
<summary>Malta</summary>

| Progects | Services             | CI/CD     | Dockerfile |
| ---------| -----------          |-----------|----------- |
|  Core    | backend              | [malta/core-backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/core-backend-ci.yml)  | [ci-cd/malta/dockerfile/backend/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/backend) |
|Kyrrex Bridge Service| acm       |           |            |
|          |  connector           | [malta/kyrrex-bridge-service-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/kyrrex-bridge-service-ci.yml) | [ci-cd/malta/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service) |
|          |Hybrid Data Controller| [malta/hybrid-data-controller-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/hybrid-data-controller-ci.yml)    | [ci-cd/malta/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service) |
|           | service-data-controller |[malta/kyrrex-bridge-service-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/kyrrex-bridge-service-ci.yml) | [ci-cd/malta/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service) |
|           | service-tickers-volumes | [malta/kyrrex-bridge-service-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/kyrrex-bridge-service-ci.yml) |[ci-cd/malta/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service) |
|           | websocket-server    | [malta/kyrrex-bridge-service-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/kyrrex-bridge-service-ci.yml) |[ci-cd/malta/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service) |
| LAL       | backend  |  [malta/backend-lal-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/backend-lal-ci.yml) | [ci-cd/malta/dockerfile/backend-lal/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/backend-lal)|
|Universal Connector   | SpiderD  | [malta/spiderd-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/spiderd-ci.yml)| [ci-cd/malta/dockerfile/spiderd/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/spiderd)|
|           |Spiderd-balancer | [malta/spiderd-balancer-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/spiderd-balancer-ci.yml)| [ci-cd/malta/dockerfile/spiderd/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/spiderd)|
|           |Spiderd-translator-kyrrex | [malta/spiderd-translator-kyrrex-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/spiderd-translator-kyrrex-ci.yml)|[ci-cd/malta/dockerfile/spiderd/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/spiderd)|
|WL         | backend            |[malta/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/backend-ci.yml) |[ci-cd/malta/dockerfile/backend/Dockerfile-3.0](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/dockerfile/backend/Dockerfile-3.0)|
|           | client-front       | [malta/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/front-ci.yml)|  |
|           | CMS                | [malta/cms-ci.yml]{https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/cms-ci.yml}    |  | 
|           | landing            | [malta/landing-ci.yml]{https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/landing-ci.yml}| |
|           | Site Files         | [malta/files-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/files-ci.yml)|   |
|           | tradingview        | [malta/tradingview-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/malta/tradingview-ci.yml)| |
</details>
<details>
<summary>microservices/projects</summary>

| Progects   | Services                | CI/CD                                                                                       | Dockerfile |
| ---------  | -----------             |-----------                                                                                  |----------- |
| Backoffice | backend                 |[backoffice/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/backoffice/backend-ci.yml)||
|            | Crypto AML Front        |[cryptoaml/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/cryptoaml/front-ci.yml)      ||
|            | Crypto Processing Front |[backoffice/processing-front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/backoffice/processing-front-ci.yml)                                                                                                                         ||
|            | front                   |[backoffice/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/backoffice/front-ci.yml)    ||
| collector  | backoffice-front        |[]()                                                                                                     ||
|            | backoffice-gateway      |[gitlab-ci/microservices/gateway-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/gateway-ci.yml)                                                                                                                    ||
|            | bo                      |[]()                                                                                                     ||
|            | gateway                 |[gitlab-ci/microservices/gateway-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/gateway-ci.yml)                                                                                                                    || 
|            | members                 |[gitlab-ci/microservices/members-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/members-ci.yml)                                                                                                                    ||
</details>
<details>
<summary>microservices/projects</summary>

| Progects   | Services                | CI/CD     | Dockerfile     |
| ---------  | -----------             |-----------|-----------     |
| Backoffice | backend                 |[]()       |[]()            |
|            | Crypto AML Front        |[]()       |[]()            |
|            | Crypto Processing Front |[]()       |[]()            |
|            | front                   |[]()       |[]()            |
| collector  | backoffice-front        |[]()       |[]()            |
|            | backoffice-gateway      |[]()       |[]()            |
|            | bo                      |[]()       |[]()            |
|            | gateway                 |[]()       |[]()            |
|            | members                 |[]()       |[]()            |
</details>
<details>
<summary>microservices</summary>

| Progects   | Services                | CI/CD     | Dockerfile     |
| ---------  | -----------             |-----------|-----------     |
| services   | auth                    |[gitlab-ci/microservices/auth-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/auth-ci.yml)                                       |[]()            |
|            | auth-back-office        |[]()       |[]()            |
|            | baf                     |[gitlab-ci/microservices/baf-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/baf-ci.yml)                                        |[]()            |
|            | brocker                 |[]()       |[]()            |
|            | chaincore               |[gitlab-ci/microservices/chaincore-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/chaincore-ci.yml)                    |[]()            |
|            | launchpad               |[gitlab-ci/microservices/launchpad-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/launchpad-ci.yml)                    |[]()            |
|            | lot                     |[gitlab-ci/microservices/lot-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/lot-ci.yml)                                        |[]()            |
|            | mailer                  |[gitlab-ci/microservices/mailer-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/mailer-ci.yml)                       |[]()            |
|            | mediator                |[gitlab-ci/microservices/mediator-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/mediator-ci.yml)                     |[]()            |
|            | Payments                |[gitlab-ci/microservices/payments-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/payments-ci.yml)                     |[]()            |
|            | rates                   |[gitlab-ci/microservices/rates-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/rates-ci.yml)                                      |[]()            |
|            | recaptcha               |[gitlab-ci/microservices/recaptcha-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/recaptcha-ci.yml)                    |[]()            |
|            | refreshes               |[gitlab-ci/microservices/refreshes-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/refreshes-ci.yml)                    |[]()            |
|            | static                  |[gitlab-ci/microservices/static-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/static-ci.yml)                       |[]()            |
|            | transactions-monitoring |[gitlab-ci/microservices/transactions-monitoring-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/transactions-monitoring-ci.yml)|[]()        |
|            | translates              |[gitlab-ci/microservices/translates-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/translates-ci.yml)                   |[]()            |
|            | users-actions-logger    |[gitlab-ci/microservices/users-actions-logger-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/users-actions-logger-ci.yml)|[]()           |
|            | wl                      |[gitlab-ci/microservices/wl-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/microservices/wl-ci.yml)                                         |[]()            |
| starter    | starter-ms              |[]()       |[]()            |
| chaincore  |                         |[]()       |[]()            |
| manifest   |                         |[]()       |[]()            |
</details>
<details>
<summary>microservices/projects</summary>

| Progects              | Services               | CI/CD                                    | Dockerfile     |
| ---------             | -----------            |-----------                               |-----------     |
| Kyrrex Bridge Service | acm                    |[]()                                      |[]()            |
|                       | connector              |[gitlab-ci/kyrrex-bridge-service-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/kyrrex-bridge-service-ci.yml)                    |[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service)                                                     |
|                       | Hybrid Data Controller |[gitlab-ci/hybrid-data-controller-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/hybrid-data-controller-ci.yml)                   |[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service)                                                     |
|                       | service-data-controller|[gitlab-ci/kyrrex-bridge-service-ci.yml]()|[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service)          |
|                       | service-tickers-volumes|[gitlab-ci/kyrrex-bridge-service-ci.yml]()|[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service)          |
|                       | websocket-server       |[gitlab-ci/websocket-server-ci.yml]()     |[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/kyrrex-bridge-service)          |
</details>
<details>			
<summary>Universal Connector</summary>

| Progects            | Services                  | CI/CD     | Dockerfile                                                                           |
| ---------           | -----------               |-----------|-----------                                                                           |
| Universal Connector | SpiderD                   |[gitlab-ci/spiderd-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/spiderd-ci.yml)                  |[ci-cd/dockerfile/spiderd/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/spiderd)            |
|                     | Spiderd-balancer          |[]()       |[]()                                                                                  |
|                     | Spiderd-translator-kyrrex |[gitlab-ci/spiderd-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/spiderd-ci.yml)                  |[ci-cd/dockerfile/spiderd/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/malta/dockerfile/spiderd)            |
</details>
<details>			
<summary>Affiliate</summary>

| Progects | Services           | CI/CD          | Dockerfile                                                                           |
| ---------| -----------        |-----------     |-----------                                                                           |
| packages | starter-rmq-service|                |                                                                                      |
| services | gateway            |[gitlab-ci/affiliate-microservices-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-microservices-ci.yml) |[]()                                                                                                   |   
|          | locations          |[gitlab-ci/affiliate-microservices-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-microservices-ci.yml) |[]()                                                                                                   |
|          | mailer             |[gitlab-ci/affiliate-microservices-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-microservices-ci.yml)                  |[]()                                                                                  |
|          | translates         |                |[]()                                                                                  |
|          | users              |[gitlab-ci/affiliate-microservices-ci.yml ](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-microservices-ci.yml)                  |[]()                                                                                  |
| Backend  |                    |[gitlab-ci/affiliate-server-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-server-ci.yml)                                             |[]()                                                                                  |
| db       |                    |[]()            |[]()                                                                                  |
| docker   |                    |[]()            |[]()                                                                                  |
| front    |                    |[gitlab-ci/affiliate-front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-front-ci.yml)                                             |[]()                                                                                  |
</details>
<details>
<summary>Bots</summary>

| Progects | Services           | CI/CD          | Dockerfile                                                                           |
| ---------| -----------        |-----------     |-----------                                                                           |
| Bots     | wl-telebots        | [gitlab-ci/bots-wl-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/bots-wl-ci.yml)| [ci-cd/dockerfile/bots/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/bots)                                         |			
</details>			
<details>
<summary>wl</summary>

| Progects         | Services      | CI/CD                                                                              |Dockerfile      |
| ---------        | -----------   |-----------                                                                         |-----------     |
| backend_services | baf           |[wl/baf-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/baf-ci.yml)                    |[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)                                                                                                                                |
|                  | job scheduler |[wl/job-scheduler-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/job-scheduler-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)                                                                                                                                |
|                  | lot           |[]()       |[]()            |
| backend          |               |[wl/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/backend-ci.yml)            |[ci-cd/dockerfile/wl/Dockerfile.backend](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/wl)                                      |

</details>
