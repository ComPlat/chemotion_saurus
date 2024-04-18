---
title: Preparation
author: Claire Lin
sidebar_position: 1
---

import DocCardList from "@theme/DocCardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  FigCaption,
  SubTitle,
  YouTubeFrame,
  Reader,
} from "@site/src/js/layout";
import permissionManagement from "@site/static/img/labimotion/permission-management.png";
import permissionDesigner from "@site/static/img/labimotion/permission-designer.png";
import permissionUI from "@site/static/img/labimotion/permission-ui.png";
import designerMenu from "@site/static/img/labimotion/generic-designer-menu.png";

## Before You Start...

LabIMotion divides users into two distinct roles: [Designer](../designer/index.mdx) and [User](../user/index.mdx), each with specific responsibilities and permissions tailored to their needs. We strongly recommend that you have a clear understanding of your role before proceeding.

## Words for System Administrators

### Assigning the **Designer** role

Given the importance of this **Designer** role, we recommend that you assign it to users who are responsible for creating and managing templates.

To assign the **Designer** role, navigate to the **User Management** menu and select the user to whom you wish to assign the role, click **Grant/Revoke Generic Designer**.

<div align="center">
  <img src={permissionManagement} alt="UI Feature" width="800" />
</div>

The **Grant/Revoke Generic Designer** window will appear. Click on the button to grant or revoke the permission for the selected user.

<img src={permissionDesigner} alt="Grant/Revoke Generic Designer" />

### Enabling Features

Navigate to the **UI features** menu, choose the generic feature (Element, Segment, and Dataset) that you wish to enable. Click on the **Edit Permission** <FontAwesomeIcon icon={faPenToSquare} /> button to configure the permissions for the selected feature.

<div align="center">
  <img src={permissionUI} alt="UI Feature" width="500" />
</div>

## Words for Designers

To access the Designer function, you must have the necessary permissions. If you can't find the **Generic Designer** option in the menu, please contact your system administrator for assistance.

<div align="center">
  <img src={designerMenu} alt="Generic Designer (menu)" />
</div>

### Recommended practices

Utilize the Template Hub, a user-friendly collaboration center designed for scientists to effortlessly share templates across different applications. Learn how to synchronize templates from the Template Hub in the **[Template Sync & Publish](../../template-sync-and-publish.mdx)**.

## Words for Users

Make sure you have the necessary permissions to access **Generic Elements, Segments, or  Datasets**. If these generic features are not visible, please contact your system administrator for assistance.
