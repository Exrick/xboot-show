import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://i.loli.net/2019/03/25/5c984c1120873.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      { name: 'item0', a: { children: '官网', href: 'http://xb.exrick.cn' } },
      {
        name: 'item1',
        a: {
          children: '在线演示',
          href: 'http://xboot.exrick.cn',
          target: '_black',
        },
      },
      {
        name: 'item2',
        a: {
          children: '获取完整版',
          href: 'http://xpay.exrick.cn/pay?xboot',
          target: '_black',
        },
      },
      {
        name: 'item3',
        a: {
          children: '商用授权',
          href: 'http://wpa.qq.com/msgrd?v=3&uin=1012139570&site=qq&menu=yes',
          target: '_black',
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title jtnstd5q52-editor_css',
    children: 'https://i.loli.net/2019/04/01/5ca1b48e23ac4.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>XBoot前后端分离快速开发平台</p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button jtntac62itf-editor_css',
    href: "http://xboot.exrick.cn",
    children: (
      <span>
        <p>立即体验</p>
      </span>
    )
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>框架特性</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>快速开发</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>Java、Vue、SQL代码生成效率翻四倍</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>Activiti工作流</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>前后端分离集成十分完整、简单配置的工作流</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>权限管理</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>动态权限管理、多维度轻松控制权限按钮显示</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>完整版及商用版提供服务</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>基于GitLab提供永久免费更新维护</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>消息管理</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>基于WebSocket实现站内消息实时推送与管理。</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>社交账号管理</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  支持多种第三社交账号登录，不干涉原用户数据，实现第三方账号管理。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>文件管理</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  支持本地或第三方阿里云、腾讯云、七牛云文件存储服务，可动态任意切换。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>工作流</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>集成完整简单使用的Activiti工作流，省去大量繁杂配置。</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Vue代码生成</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  一键生成Vue表格或树形操作代码，无需依赖数据库，随时随地生成。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>丰富模版组件</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  一站式开发平台，提供前后台使用业务组件以及前端产品级组件。
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>XBoot Flutter APP</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>基于Flutter开发的XBoot配套移动端APP开发中，敬请期待！</p>
      </span>
    ),
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>完整版获取</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>为开发者提供完整功能源码以供参考学习</p>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>完整版仅供学习，不得商用</p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button',
        href: 'http://xpay.exrick.cn/pay?xboot',
        children: (
          <span>
            <p>立即获取</p>
          </span>
        ),
        target: '_blank',
      },
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'https://i.loli.net/2019/03/25/5c984c1120873.png',
        },
        content: {
          className: 'slogan',
          children: (
            <span>
              <p>
                A Rapid Development Platform for Front-end and Back-end
                Separation.
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        content: {
          children: (
            <span>
              <p>
                <a href="https://github.com/Exrick/x-boot" target="_blank">Github开源版本</a>
              </p>
              <br/>
              <p>
                <a href="https://github.com/Exrick/xboot-comments/issues/3" target="_blank">更新记录 </a>
              </p>
              <br/>
              <p>
                <a href="http://xpay.exrick.cn/pay?xboot" target="_blank">获取完整版</a>
              </p>
              <br/>
              <p>
                <a href="http://wpa.qq.com/msgrd?v=3&uin=1012139570&site=qq&menu=yes" target="_blank">商用授权</a>
              </p>
              <br/>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        content: {
          children: (
            <span>
              <p>
                <a href="https://github.com/Exrick/x-boot/issues" target="_blank">FAQ</a>
              </p>
              <br/>
              <p>
                <a href="https://github.com/Exrick/xboot-show" target="_blank">本站源码</a>
              </p>
              <br/>
              <p>
                <a href="http://wpa.qq.com/msgrd?v=3&uin=1012139570&site=qq&menu=yes" target="_blank">联系作者</a>
              </p>
              <br/>
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        content: {
          children: (
            <span>
              <p>
                <a href="https://github.com/Exrick/x-boot/wiki" target="_blank">后台开发文档</a>
              </p>
              <br/>
              <p>
                <a href="https://github.com/Exrick/xboot-front/wiki" target="_blank">前端开发文档</a>
              </p>
              <br/>
              <p>
                <a href="https://www.iviewui.com" target="_blank">iView官网</a>
              </p>
              <br/>
              <p>
                <a href="https://github.com/iview/iview-admin" target="_blank">iView Admin</a>
              </p>
              <br/>
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <p>
          ©2018 - Present by <a href="http://exrick.cn">Exrick</a> All Rights Reserved<br />
        </p>
      </span>
    ),
  },
};
