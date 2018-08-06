import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Header, List, Image, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import mlURL from 'multi-languages-url';
import Markdown from 'markdown-to-jsx';


const MD = ({ md='', options={}, languages, pathname }) => {
  //console.log('|--> MD render')
  const ml = new mlURL({languages: languages, pathname: pathname});

  const MDOptions = {
    //forceBlock: true,
    overrides: {
      h1: {
        component: Header,
        props: { as: 'h1', textAlign: 'center', },
      },
      h2: {
        component: Header,
        props: { as: 'h2', textAlign: 'center', },
      },
      h3: {
        component: Header,
        props: { as: 'h3', textAlign: 'left', },
      },
      h4: {
        component: Header,
        props: { as: 'h4', textAlign: 'left', },
      },
      h5: {
        component: Header,
        props: { as: 'h5', textAlign: 'left', },
      },
      h6: {
        component: Header,
        props: { as: 'h6', textAlign: 'left', },
      },

      ul: {
        component: (props={}) => {
          var newProps = Object.assign({}, props, {bulleted: true, as: 'ul'});
          return (React.createElement(List, newProps, props.children));
        },
      },
      ol: {
        component: (props={}) => {
          var newProps = Object.assign({}, props, {ordered: true, as: 'ol'});
          return (React.createElement(List, newProps, props.children));
        },
      },
      li: {
        component: (props={}) => {
          var newProps = Object.assign({}, props, { as: 'li'});
          return (React.createElement(List.Item, newProps, props.children));
        },
      },
      a: {
        component: ({href, title, className, children}) => {
          var props = {
            title: title, className: className, target: '_blank', href: href,
          };
          const re = new RegExp(':');
          if (re.test(href)) return (React.createElement('a', props, children));
          props.href = undefined;
          props.target = undefined;
          if (href !== undefined) {
            var url = href.split('/');
            url.shift();
            url.shift();
            url = url.join('/')
            props.to = ml.url('/'+url);
          }
          return (React.createElement(Link, props, children));
        },
      },
      img: {
        component: ({alt, title, src, className}) => {
          var props = {
            alt: alt, title: title, className: className, centered: true, src: src
          };
          const re = new RegExp('//');
          if (re.test(src)) return (React.createElement(Image, props));
          props.src = "/static/documents" + src;
          return (React.createElement(Image, props));
        },
      },

      table: {
        component: (props={}) => {
          var tableProps = Object.assign({}, props, {unstackable: true, celled: true,}); //celled: true, fixed: true, striped: true
          return (
            React.createElement(Table, tableProps, React.createElement(Table.Body, props, props.children))
          );
        },
      },
      thead: {
        component: Table.Header,
      },
      th: {
        component: Table.HeaderCell,
      },
      tbody: {
        component: Table.Body,
      },
      tr: {
        component: Table.Row,
      },
      td: {
        component: Table.Cell,
      },

      blockquote: {
        props: {
          style: {padding: "0 1em", color: "#6a737d", borderLeft: "0.25em solid #dfe2e5", marginLeft: 0, }
        }
      }
    },
  }

  return (
    <Markdown
      children={md}
      options={Object.assign({}, MDOptions, options)}
      style={{marginTop: '1em', marginBottom: '1em',}}
    />
  );
}

function mapStateToProps (state) {
  return {
    languages: state.i18next.whitelist,
    pathname: state.router.location.pathname,
    //theme: state.config.theme,
  };
}

export default hot(module)(
  connect(mapStateToProps)(MD)
);
