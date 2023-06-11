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
<summary>Kyrrex Bridge Service</summary>

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
|                     | Spiderd-balancer          |[malta/spiderd-ci.yml]()       |[]()                                                                                  |
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
<details>
<summary>Bitgroup</summary>

| Progects   | Services                | CI/CD     | Dockerfile     |
| ---------  | -----------             |-----------|-----------     |
| Bitgroup   | backend                 |[bitgroup/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/bitgroup/backend-ci.yml)       |[ci-cd/dockerfile/backend/Dockerfile.leenet](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.leenet)               |

</details>

<details>
<summary>Tools</summary>

| Progects   | Services    | CI/CD      | Dockerfile     |
| ---------  | ----------- |----------- |-----------     |
| Tools      |mr-notifier  |[tools/mr-notifier-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/tools/mr-notifier-ci.yml)                                    |[ci-cd/dockerfile/tools/Dockerfile.mr-notifier](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/tools)                                                   |

</details>

<details>
<summary>WL/backend_services</summary>

| Progects         | Services    | CI/CD                                                                           | Dockerfile     |
| ---------        | ----------- |-----------                                                                      |-----------     |
| backend_services |baf          |[wl/baf-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/baf-ci.yml)| [ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)          |
|                  |job scheduler|[wl/job-scheduler-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/job-scheduler-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)|
|                  |lot          |[wl/lot-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/lot-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)          |

</details>

<details>
<summary>WL</summary>

| Progects   | Services    | CI/CD                                                                                   | Dockerfile     |
| ---------  | ----------- |-----------                                                                              |-----------     |
| backend    |             |[wl/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/wl/backend-ci.yml)|[ci-cd/dockerfile/wl/Dockerfile.backend](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/wl)                                                            |

</details>

<h1>Необходимо уточнение</h1>
<details>
<summary>cryptoaml</summary>

| Progects   | Services    | CI/CD                                                                                           | Dockerfile     |
| ---------  | ----------- |-----------                                                                                      |-----------     |
| cryptoaml  |             |[ci-cd/cryptoaml/cryptoaml-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/cryptoaml/cryptoaml-ci.yml)|[ci-cd/dockerfile/cryptoaml/$DOCKER_FILE](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/cryptoaml)                                                                                                                                    |
|            |             |[ci-cd/cryptoaml/front-ci.yml]()                                                                  |[]()           |

</details>

<details>
<summary>includes</summary>

| Progects   | Services    | CI/CD                                                                                           | Dockerfile     |
| ---------  | ----------- |-----------                                                                                      |-----------     |
| includes   |             |[ci-cd/includes/deploy-treasury-parse-staging-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/includes/deploy-treasury-parse-staging-ci.yml)                                                                                        |[]()            |

</details>

<details>
<summary>processing</summary>

| Progects   | Services    | CI/CD           | Dockerfile     |
| ---------  | ----------- |-----------      |-----------     |
| processing |             |[ci-cd/processing/crypto-processing-psim-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/processing/crypto-processing-psim-ci.yml)               |[ci-cd/dockerfile/crypto-processing/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/crypto-processing)                                 |
|            |             |[ci-cd/processing/deposit-processing-blockbook.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/processing/deposit-processing-blockbook.yml)            |[ci-cd/dockerfile/deposit-processing/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/deposit-processing)                                 |
|            |             |[ci-cd/processing/deposit-processing-router.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/processing/deposit-processing-router.yml)               |[ci-cd/dockerfile/deposit-processing/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/crypto-processing)                                  |
|            |             |[ci-cd/processing/fiat-core-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/processing/fiat-core-ci.yml) 
                                             |[]()             |
|            |             |[ci-cd/processing/fiat-gateway-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/processing/fiat-gateway-ci.yml)                                         |[]()             |

</details>

<details>
<summary>treasury</summary>

| Progects   | Services    | CI/CD                                                                                                     | Dockerfile |
| ---------  | ----------- |-----------                                                                                                |----------- |
| treasury   |             |[ci-cd/treasury/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/treasury/backend-ci.yml)|[]()        |

</details>

<details>
<summary>ci-cd/gitlab-ci/moneta</summary>

| Progects   | Services    | CI/CD                                                                                                     | Dockerfile |
| ---------  | ----------- |-----------                                                                                                |----------- |
| moneta     |             |[ci-cd/gitlab-ci/moneta/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/moneta/backend-ci.yml)|[devops-gitlabci/dockerfile/backend/Dockerfile]()                                                                                                   |
|            |             |[ci-cd/gitlab-ci/moneta/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/moneta/front-ci.yml)|[devops-gitlabci/dockerfile/front/Dockerfile]()                                                                                                     |
|            |             |[ci-cd/gitlab-ci/moneta/landing-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/moneta/landing-ci.yml)|[devops-gitlabci/dockerfile/front/Dockerfile]()                                                                                                     |

</details>

<details>
<summary>ci-cd/gitlab-ci/mario</summary>

| Progects   | Services    | CI/CD                                                                                                     | Dockerfile   |
| ---------  | ----------- |-----------                                                                                                |-----------   |
| mario      |             |[ci-cd/gitlab-ci/mario/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/mario/backend-ci.yml)|[devops-gitlabci/dockerfile/mario/backend/Dockerfile]()                                                                                               |
|            |             |[ci-cd/gitlab-ci/mario/bots-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/mario/bots-ci.yml)|[devops-gitlabci/dockerfile/mario/bots/Dockerfile]()                                                                                                  |
|            |             |[ci-cd/gitlab-ci/mario/files-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/mario/files-ci.yml)|[]()|
|            |             |[ci-cd/gitlab-ci/mario/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/mario/front-ci.yml)|[devops-gitlabci/dockerfile/mario/front/Dockerfile]()                                                                                                 |
|            |             |[ci-cd/gitlab-ci/mario/landing-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/mario/landing-ci.yml)|[devops-gitlabci/dockerfile/mario/front/Dockerfile]()                                                                                                 |

</details>

<details>
<summary>ci-cd/gitlab-ci/wldev</summary>

| Progects   | Services    | CI/CD                                                                                                     | Dockerfile   |
| ---------  | ----------- |-----------                                                                                                |-----------   |
| wldev      |             |[ci-cd/gitlab-ci/wldev/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/wldev/backend-ci.yml)|[devops-gitlabci/dockerfile/wldev/backend/Dockerfile ]()                                                                                               |
|            |             |[ci-cd/gitlab-ci/wldev/bots-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/wldev/bots-ci.yml)|[devops-gitlabci/dockerfile/wldev/bots/Dockerfile]()                                                                                                  |
|            |             |[ci-cd/gitlab-ci/wldev/files-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/wldev/files-ci.yml)|[]()|
|            |             |[ci-cd/gitlab-ci/wldev/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/wldev/front-ci.yml)|[devops-gitlabci/dockerfile/wldev/front/Dockerfile]()                                                                                                 |
|            |             |[ci-cd/gitlab-ci/wldev/landing-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/wldev/landing-ci.yml)|[devops-gitlabci/dockerfile/wldev/front/Dockerfile]()                                                                                                 |

</details>

<details>
<summary>ci-cd/gitlab-ci</summary>

| Progects   | Services    | CI/CD                                                                                                     | Dockerfile   |
| ---------  | ----------- |-----------                                                                                                |-----------   |
|            |             |[ci-cd/gitlab-ci/affiliate-front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-front-ci.yml)|[ci-cd/dockerfile/affiliate-front/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/affiliate-front)                          |
|            |             |[ci-cd/gitlab-ci/affiliate-microservices-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-microservices-ci.yml)|[]()                                                                                                                  |
|            |             |[ci-cd/gitlab-ci/affiliate-server-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/affiliate-server-ci.yml)|[ci-cd/dockerfile/affiliate/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/affiliate)|
|            |             |[ci-cd/gitlab-ci/backend-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile)                                       |
|            |             |[ci-cd/gitlab-ci/backend-demo-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-demo-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.demo](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.demo)                      |
|            |             |[ci-cd/gitlab-ci/backend-kyrrex-svg-baf-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-kyrrex-svg-baf-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)                                                                                                                | 
|            |             |[ci-cd/gitlab-ci/backend-kyrrex-svg-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-kyrrex-svg-ci.yml) |[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg)                                                                                                                                 | 
|            |             |[ci-cd/gitlab-ci/backend-kyrrex-svg-job-scheduler-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-kyrrex-svg-job-scheduler-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)                                                                                                     | 
|            |             |[ci-cd/gitlab-ci/backend-kyrrex-svg-lot-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-kyrrex-svg-lot-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.kyrrex-svg.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.kyrrex-svg.services)                                                                                                                | 
|            |             |[ci-cd/gitlab-ci/backend-leenet-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-leenet-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.leenet](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.leenet)                  | 
|            |             |[ci-cd/gitlab-ci/backend-moneta-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-moneta-ci.yml)       |[ci-cd/dockerfile/backend/Dockerfile.moneta](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.moneta)      | 
|            |             |[ci-cd/gitlab-ci/backend-otc-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-otc-ci.yml)      |[ci-cd/dockerfile/backend/Dockerfile.otc](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.otc)                        | 
|            |             |[ci-cd/gitlab-ci/backend-otc-kyrrex-svg-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-otc-kyrrex-svg-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.otc-kyrrex-svg](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.otc-kyrrex-svg)                                                                                                                             | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-baf-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-baf-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.wldev.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev.services)                                                                                                                                              | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-ci.yml)       |[ci-cd/dockerfile/backend/Dockerfile.wldev](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev)        | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-job-scheduler-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-job-scheduler-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.wldev.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev.services)                                                                                                                     | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-lot-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-lot-ci.yml)         |[ci-cd/dockerfile/backend/Dockerfile.wldev.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev.services)                                                                                                                                              | 
|            |             |[ci-cd/gitlab-ci/bots-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/bots-ci.yml)|[devops-gitlabci/dockerfile/bots/Dockerfile]()                                                                                                                          | 
|            |             |[ci-cd/gitlab-ci/bots-leenet-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/bots-leenet-ci.yml)      |[devops-gitlabci/dockerfile/bots/Dockerfile]()                                                                                             | 
|            |             |[ci-cd/gitlab-ci/backend-moneta-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-moneta-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.moneta](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.moneta)                  | 
|            |             |[ci-cd/gitlab-ci/backend-otc-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-otc-ci.yml)      |[ci-cd/dockerfile/backend/Dockerfile.otc](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.otc)                        | 
|            |             |[ci-cd/gitlab-ci/backend-otc-kyrrex-svg-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-otc-kyrrex-svg-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.otc-kyrrex-svg](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.otc-kyrrex-svg)                                                                                                                             | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-baf-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-baf-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.wldev.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev.services)                                                                                                                                              | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-ci.yml)  |[ci-cd/dockerfile/backend/Dockerfile.wlde](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev)                     | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-job-scheduler-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-job-scheduler-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.wldev.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev.services)                                                                                                                     | 
|            |             |[ci-cd/gitlab-ci/backend-wldev-lot-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/backend-wldev-lot-ci.yml)|[ci-cd/dockerfile/backend/Dockerfile.wldev.services](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/dockerfile/backend/Dockerfile.wldev.services)                                                                                                                                              | 
|            |             |[ci-cd/gitlab-ci/bots-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/bots-ci.yml)|[devops-gitlabci/dockerfile/bots/Dockerfile]()                                                                                                                          | 
|            |             |[ci-cd/gitlab-ci/bots-leenet-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/bots-leenet-ci.yml)      |[devops-gitlabci/dockerfile/bots/Dockerfile ]()                                                                                                        | 
|            |             |[ci-cd/gitlab-ci/bots-wl-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/bots-wl-ci.yml)|[ci-cd/dockerfile/bots/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/bots)            | 
|            |             |[ci-cd/gitlab-ci/files-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/files-ci.yml) |[]()            | 
|            |             |[ci-cd/gitlab-ci/front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/front-ci.yml) |[]()            | 
|            |             |[ci-cd/gitlab-ci/gateway-front-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/gateway-front-ci.yml)         |[ci-cd/dockerfile/gateway-front/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/gateway-front)                 | 
|            |             |[ci-cd/gitlab-ci/hybrid-data-controller-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/hybrid-data-controller-ci.yml)|[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/kyrrex-bridge-service)                                                                                                                                 | 
|            |             |[ci-cd/gitlab-ci/kyrrexweb-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/kyrrexweb-ci.yml)|[]       | 
|            |             |[ci-cd/gitlab-ci/landing-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/landing-ci.yml)    |[]()     | 
|            |             |[ci-cd/gitlab-ci/spiderd-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/spiderd-ci.yml)       |[ci-cd/dockerfile/spiderd/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/spiderd)                                                  | 
|            |             |[ci-cd/gitlab-ci/telegram-server-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/telegram-server-ci.yml)       |[ci-cd/dockerfile/telegram-server/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/telegram-server)               | 
|            |             |[ci-cd/gitlab-ci/tradingview-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/tradingview-ci.yml)|[]()| 
|            |             |[ci-cd/gitlab-ci/websocket-server-ci.yml](https://git.wldev.app/gitlabci/ci-cd/-/blob/master/gitlab-ci/websocket-server-ci.yml)       |[ci-cd/dockerfile/kyrrex-bridge-service/Dockerfile](https://git.wldev.app/gitlabci/ci-cd/-/tree/master/dockerfile/kyrrex-bridge-service)   | 

</details>
