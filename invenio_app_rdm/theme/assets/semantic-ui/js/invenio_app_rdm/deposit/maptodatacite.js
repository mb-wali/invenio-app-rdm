// WIP
export function MapDatacite(metadata, recordid) {
  console.log('record id', recordid)
  console.log('retrieved', metadata)
  console.log('creators []', metadata.creators)
  console.log('publication_date []', metadata.publication_date)
  let r = Math.random().toString(36).substring(7);
  console.log("random", r);

    const dataciterecord = {
        data : {
          id: "10.0356/datacite-"+r,
          type: "dois",
          attributes: {
            event: "publish",
            doi: "10.0356/datacite-"+r,
            creators: [{
              name: metadata.creators[0].person_or_org.name
            }],
            titles: [{
              title: metadata.title
            }],
            publisher: metadata.publisher,
            publicationYear: metadata.publication_date,
            types: {
              resourceTypeGeneral: "Text"
            },
            url: "https://repository.tugraz.at",
            schemaVersion: "http://datacite-rest.org/schema/kernel-4"
          }
        }
      };

      return dataciterecord
    }

// docs: https://support.datacite.org/docs/api-create-dois
// test created: https://api.test.datacite.org/dois/10.0356/datacite-8baxw
