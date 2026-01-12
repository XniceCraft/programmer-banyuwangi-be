import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    information: Schema.Attribute.Blocks & Schema.Attribute.Required;
    linkButton: Schema.Attribute.Component<'shared.link-button', false>;
  };
}

export interface FooterAdditionalNavigation extends Struct.ComponentSchema {
  collectionName: 'components_footer_additional_navigations';
  info: {
    displayName: 'Additional Navigation';
  };
  attributes: {
    primary: Schema.Attribute.Component<'shared.navigation-with-icon', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    secondary: Schema.Attribute.Component<'shared.navigation', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface HomePageSubHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_sub_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    backgroundText: Schema.Attribute.String & Schema.Attribute.Required;
    documentations: Schema.Attribute.Relation<
      'oneToMany',
      'api::documentation.documentation'
    >;
    firstSection: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
    secondSection: Schema.Attribute.Component<'shared.section', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface SharedLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_buttons';
  info: {
    displayName: 'Link Button';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavigationGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_groups';
  info: {
    displayName: 'Navigation Grid';
  };
  attributes: {
    columnsCount: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<3>;
    navigations: Schema.Attribute.Component<'shared.navigation', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedNavigationWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_with_icons';
  info: {
    displayName: 'Navigation With Icon';
  };
  attributes: {
    showIcon: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-information': ContactContactInformation;
      'footer.additional-navigation': FooterAdditionalNavigation;
      'home-page.sub-hero-section': HomePageSubHeroSection;
      'shared.link-button': SharedLinkButton;
      'shared.navigation': SharedNavigation;
      'shared.navigation-group': SharedNavigationGroup;
      'shared.navigation-with-icon': SharedNavigationWithIcon;
      'shared.section': SharedSection;
    }
  }
}
