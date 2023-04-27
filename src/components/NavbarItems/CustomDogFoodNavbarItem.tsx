/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from "react";
import {useLocation} from '@docusaurus/router';

// used to dogfood custom navbar elements are possible
// see https://github.com/facebook/docusaurus/issues/7227
export default function CustomDogfoodNavbarItem(props: {
  content: string;
  mobile?: boolean;
}): JSX.Element | null {
  const {pathname} = useLocation();

  useEffect(()=> {
    let dropdown_container:HTMLElement | null  = document.querySelector("#versiondropdown");
    if(dropdown_container?.parentElement?.classList.contains("dropdown"))
    {
      dropdown_container = dropdown_container.parentElement;
    }

    const metallicDropdownOption = document.querySelector("#MetallicDropdownOption");
    const dropdownTitle = document.querySelector("#CommcellTypeId");
    
    if (metallicDropdownOption) {
      if (pathname.includes("/cv2/")) metallicDropdownOption.classList.add("dropdown__link--active");
      else metallicDropdownOption.classList.remove("dropdown__link--active");
    }
    if (dropdown_container) dropdown_container.style.display = pathname.includes("/cv/") ? 'block' : 'none';
    if (dropdownTitle) dropdownTitle.textContent = pathname.includes("/cv/") ? 'OnPrem': (pathname.includes("/cv2/") ? "Metallic" : "Select commcell type")
  }, [pathname]);

  return null;
}