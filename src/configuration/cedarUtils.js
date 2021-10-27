function getArtefactTypeOpenView(artefactID) {
  if (artefactID.includes("template-instances")) {
    return "template-instances";
  } else if (artefactID.includes("template-fields")) {
    return "template-fields";
  } else if (artefactID.includes("template-elements")) {
    return "template-elements";
  } else {
    return "template";
  }
}

function getArtefactTypeCedar(artefactID) {
  if (artefactID.includes("template-instances")) {
    return "instances";
  } else if (artefactID.includes("template-fields")) {
    return "fields";
  } else if (artefactID.includes("template-elements")) {
    return "elements";
  } else {
    return "templates";
  }
}

export function getOpenViewURL(artefactID) {
  let openViewURL =
    "https://openview.metadatacenter.org/artefactType/artefactID";
  const artefactType = getArtefactTypeOpenView(artefactID);
  artefactID = encodeURIComponent(artefactID);
  return openViewURL
    .replace("artefactType", artefactType)
    .replace("artefactID", artefactID);
}

export function getCedarURL(artefactID) {
  let cedarURL =
    "https://cedar.metadatacenter.org/artefactType/edit/artefactID";
  const artefactType = getArtefactTypeCedar(artefactID);
  return cedarURL
    .replace("artefactType", artefactType)
    .replace("artefactID", artefactID);
}
