---
id: oa_oai_pmh
title: OAI-PMH Service
slug: oa_oai_pmh
author: Claire Lin
---

## The OAI-PMH service is available

### The OAI-PMH service exposes metadata stored in the Chemotion Repository using the Open Archives Initiative Protocol for Metadata Harvesting (OAI-PMH).

This service is open to the public. The Chemotion Repository processes OAI-PMH requests and exposes metadata so that records can be harvested.

Six verbs are defined in the OAI-PMH specification and used for the discovery and sharing of metadata.

The six OAI-PMH verbs are:

- Identify
- ListIdentifiers
- ListRecords
- GetRecords
- ListSets
- ListMetadataFormat

There are a number of parameters that can be used by harvesters to restrict harvest requests to certain portions of the metadata, they are:

- identifier
- metadataPrefix
- set
- from
- until
- resumptionToken

The Chemotion Repository OAI-PMH service is able to provide metadata in the following formats:

- OAI Dublin Core (oai_dc)
- OAI DataCite (oai_datacite)

Please visit the [Open Archives Initiative](https://www.openarchives.org/) for more details.

### Examples

- You want to request records in the oai_dc metadata format, between 2022-08-01T14:15:00Z and 2022-09-01T14:20:00Z.

_Request_

https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=2022-08-01T14:15:00Z&until=2022-09-01T14:20:00Z&metadataPrefix=oai_dc

- You want to request records in the oai_datacite metadata format, between 2022-08-01T14:15:00Z and 2022-09-01T14:20:00Z.

_Request_

https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=2022-08-01T14:15:00Z&until=2022-09-01T14:20:00Z&metadataPrefix=oai_datacite

- No data can be found

_Request_

https://www.chemotion-repository.net/oai-pmh?verb=ListRecords&from=1022-08-01T14:15:00Z&until=1022-09-01T14:20:00Z&metadataPrefix=oai_dc

- You use the wrong verb in the OAI-PMH request

_Request_

https://www.chemotion-repository.net/oai-pmh?verb=ABC
